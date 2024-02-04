import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipient_tagCountOrderByAggregateInput } from "../inputs/Newsletter_recipient_tagCountOrderByAggregateInput";
import { Newsletter_recipient_tagMaxOrderByAggregateInput } from "../inputs/Newsletter_recipient_tagMaxOrderByAggregateInput";
import { Newsletter_recipient_tagMinOrderByAggregateInput } from "../inputs/Newsletter_recipient_tagMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Newsletter_recipient_tagOrderByWithAggregationInput", {})
export class Newsletter_recipient_tagOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  newsletter_recipient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Newsletter_recipient_tagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Newsletter_recipient_tagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Newsletter_recipient_tagMinOrderByAggregateInput | undefined;
}
