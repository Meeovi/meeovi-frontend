import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_tagCountOrderByAggregateInput } from "../inputs/Media_tagCountOrderByAggregateInput";
import { Media_tagMaxOrderByAggregateInput } from "../inputs/Media_tagMaxOrderByAggregateInput";
import { Media_tagMinOrderByAggregateInput } from "../inputs/Media_tagMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_tagOrderByWithAggregationInput", {})
export class Media_tagOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Media_tagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Media_tagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_tagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Media_tagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_tagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Media_tagMinOrderByAggregateInput | undefined;
}
