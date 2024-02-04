import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_type_translationOrderByRelevanceFieldEnum } from "../../enums/Mail_template_type_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_template_type_translationOrderByRelevanceInput", {})
export class Mail_template_type_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Mail_template_type_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
