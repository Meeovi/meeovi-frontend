import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesOrderByRelationAggregateInput } from "../inputs/Directus_filesOrderByRelationAggregateInput";
import { Directus_foldersOrderByRelationAggregateInput } from "../inputs/Directus_foldersOrderByRelationAggregateInput";
import { Directus_foldersOrderByRelevanceInput } from "../inputs/Directus_foldersOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_foldersOrderByWithRelationAndSearchRelevanceInput", {})
export class Directus_foldersOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesOrderByRelationAggregateInput, {
    nullable: true
  })
  directus_files?: Directus_filesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  directus_folders?: Directus_foldersOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersOrderByRelationAggregateInput, {
    nullable: true
  })
  other_directus_folders?: Directus_foldersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Directus_foldersOrderByRelevanceInput | undefined;
}
