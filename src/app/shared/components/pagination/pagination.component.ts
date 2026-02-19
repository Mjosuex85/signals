import { Component, computed, effect, inject, input } from '@angular/core';
import { Pagination } from '../../interfaces/common.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-pagination',
  imports: [MatIconModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {

  pagination = input.required<Pagination>();
  currentPage = input<any>();

  private router = inject(Router)
  private route = inject(ActivatedRoute)

 pages = computed(() => {
    const total = this.pagination()?.pages ?? 0;
    return Array.from({ length: total }, (_, i) => i + 1);
  });

 arrowPageChange(direction: '+' | '-') {
  const current = parseInt(this.route.snapshot.queryParamMap.get('page') ?? '1');
  const nextPage = direction === '+' ? current + 1 : current - 1;
  this.goToPage(nextPage);
}

  goToPage(page: number) {
    const direction = page > this.currentPage() ? 'next' : 'prev';
  const html = document.documentElement;
  html.classList.add(direction);
    this.router.navigate([], {
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
  }

}