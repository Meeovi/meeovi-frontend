import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationOrderByRelevanceFieldEnum } from "../../enums/Mail_header_footer_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_header_footer_translationOrderByRelevanceInput", {})
export class Mail_header_footer_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Mail_header_footer_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "description" | "header_html" | "header_plain" | "footer_html" | "footer_plain">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
