import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_translationOrderByRelevanceFieldEnum } from "../../enums/Mail_template_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_template_translationOrderByRelevanceInput", {})
export class Mail_template_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Mail_template_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"sender_name" | "subject" | "description" | "content_html" | "content_plain" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
