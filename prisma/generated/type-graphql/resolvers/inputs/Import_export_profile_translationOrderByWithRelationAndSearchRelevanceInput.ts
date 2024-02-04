import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profileOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Import_export_profileOrderByWithRelationAndSearchRelevanceInput";
import { Import_export_profile_translationOrderByRelevanceInput } from "../inputs/Import_export_profile_translationOrderByRelevanceInput";
import { LanguageOrderByWithRelationAndSearchRelevanceInput } from "../inputs/LanguageOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Import_export_profile_translationOrderByWithRelationAndSearchRelevanceInput", {})
export class Import_export_profile_translationOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  import_export_profile_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  label?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  import_export_profile?: Import_export_profileOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => LanguageOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  language?: LanguageOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Import_export_profile_translationOrderByRelevanceInput | undefined;
}
