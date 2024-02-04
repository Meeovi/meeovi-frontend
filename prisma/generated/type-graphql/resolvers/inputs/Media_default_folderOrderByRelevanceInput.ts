import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_default_folderOrderByRelevanceFieldEnum } from "../../enums/Media_default_folderOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_default_folderOrderByRelevanceInput", {})
export class Media_default_folderOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Media_default_folderOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"association_fields" | "entity" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
