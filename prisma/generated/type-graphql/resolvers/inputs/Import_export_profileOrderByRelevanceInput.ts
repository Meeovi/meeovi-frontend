import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profileOrderByRelevanceFieldEnum } from "../../enums/Import_export_profileOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Import_export_profileOrderByRelevanceInput", {})
export class Import_export_profileOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Import_export_profileOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "source_entity" | "file_type" | "delimiter" | "enclosure" | "type" | "mapping" | "update_by" | "config">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
