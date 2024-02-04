import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaAvgOrderByAggregateInput } from "../inputs/Mail_template_mediaAvgOrderByAggregateInput";
import { Mail_template_mediaCountOrderByAggregateInput } from "../inputs/Mail_template_mediaCountOrderByAggregateInput";
import { Mail_template_mediaMaxOrderByAggregateInput } from "../inputs/Mail_template_mediaMaxOrderByAggregateInput";
import { Mail_template_mediaMinOrderByAggregateInput } from "../inputs/Mail_template_mediaMinOrderByAggregateInput";
import { Mail_template_mediaSumOrderByAggregateInput } from "../inputs/Mail_template_mediaSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_template_mediaOrderByWithAggregationInput", {})
export class Mail_template_mediaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mail_template_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  language_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Mail_template_mediaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Mail_template_mediaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Mail_template_mediaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Mail_template_mediaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Mail_template_mediaSumOrderByAggregateInput | undefined;
}
