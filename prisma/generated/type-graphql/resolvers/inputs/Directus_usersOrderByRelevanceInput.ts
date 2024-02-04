import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersOrderByRelevanceFieldEnum } from "../../enums/Directus_usersOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_usersOrderByRelevanceInput", {})
export class Directus_usersOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Directus_usersOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "first_name" | "last_name" | "email" | "password" | "location" | "title" | "description" | "tags" | "avatar" | "language" | "theme" | "tfa_secret" | "status" | "role" | "token" | "last_page" | "provider" | "external_identifier" | "auth_data">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
