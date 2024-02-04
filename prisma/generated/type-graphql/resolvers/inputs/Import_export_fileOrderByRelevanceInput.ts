import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_fileOrderByRelevanceFieldEnum } from "../../enums/Import_export_fileOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Import_export_fileOrderByRelevanceInput", {})
export class Import_export_fileOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Import_export_fileOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"original_name" | "path" | "access_token">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
