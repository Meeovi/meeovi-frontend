import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientOrderByRelevanceFieldEnum } from "../../enums/Newsletter_recipientOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Newsletter_recipientOrderByRelevanceInput", {})
export class Newsletter_recipientOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Newsletter_recipientOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"email" | "title" | "first_name" | "last_name" | "zip_code" | "city" | "street" | "status" | "hash" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
