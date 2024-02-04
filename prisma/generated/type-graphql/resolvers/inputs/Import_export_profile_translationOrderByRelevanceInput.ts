import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profile_translationOrderByRelevanceFieldEnum } from "../../enums/Import_export_profile_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Import_export_profile_translationOrderByRelevanceInput", {})
export class Import_export_profile_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Import_export_profile_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "label"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
