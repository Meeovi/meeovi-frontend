import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppOrderByWithRelationAndSearchRelevanceInput } from "../inputs/AppOrderByWithRelationAndSearchRelevanceInput";
import { App_payment_methodOrderByRelevanceInput } from "../inputs/App_payment_methodOrderByRelevanceInput";
import { MediaOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MediaOrderByWithRelationAndSearchRelevanceInput";
import { Payment_methodOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Payment_methodOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_payment_methodOrderByWithRelationAndSearchRelevanceInput", {})
export class App_payment_methodOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  app_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  pay_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  finalize_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  validate_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  capture_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  refund_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  original_media_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  recurring_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => AppOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  app?: AppOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MediaOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  media?: MediaOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  payment_method?: Payment_methodOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: App_payment_methodOrderByRelevanceInput | undefined;
}
