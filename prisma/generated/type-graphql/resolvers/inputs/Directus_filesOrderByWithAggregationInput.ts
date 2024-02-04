import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesAvgOrderByAggregateInput } from "../inputs/Directus_filesAvgOrderByAggregateInput";
import { Directus_filesCountOrderByAggregateInput } from "../inputs/Directus_filesCountOrderByAggregateInput";
import { Directus_filesMaxOrderByAggregateInput } from "../inputs/Directus_filesMaxOrderByAggregateInput";
import { Directus_filesMinOrderByAggregateInput } from "../inputs/Directus_filesMinOrderByAggregateInput";
import { Directus_filesSumOrderByAggregateInput } from "../inputs/Directus_filesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_filesOrderByWithAggregationInput", {})
export class Directus_filesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  storage?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  filename_disk?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  filename_download?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  title?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  type?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  folder?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  uploaded_by?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  uploaded_on?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  modified_by?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modified_on?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  charset?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  filesize?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  width?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  height?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  duration?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  embed?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  location?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tags?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  metadata?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Directus_filesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Directus_filesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Directus_filesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Directus_filesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Directus_filesSumOrderByAggregateInput | undefined;
}
