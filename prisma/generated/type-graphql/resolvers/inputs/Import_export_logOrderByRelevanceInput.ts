import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logOrderByRelevanceFieldEnum } from "../../enums/Import_export_logOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Import_export_logOrderByRelevanceInput", {})
export class Import_export_logOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Import_export_logOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"activity" | "state" | "username" | "profile_name" | "config" | "result">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
