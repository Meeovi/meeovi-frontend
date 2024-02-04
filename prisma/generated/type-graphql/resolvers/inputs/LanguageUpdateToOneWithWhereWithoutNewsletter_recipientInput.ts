import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutNewsletter_recipientInput } from "../inputs/LanguageUpdateWithoutNewsletter_recipientInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutNewsletter_recipientInput", {})
export class LanguageUpdateToOneWithWhereWithoutNewsletter_recipientInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutNewsletter_recipientInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutNewsletter_recipientInput;
}
