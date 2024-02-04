import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutNewsletter_recipientInput } from "../inputs/LanguageCreateWithoutNewsletter_recipientInput";
import { LanguageUpdateWithoutNewsletter_recipientInput } from "../inputs/LanguageUpdateWithoutNewsletter_recipientInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutNewsletter_recipientInput", {})
export class LanguageUpsertWithoutNewsletter_recipientInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutNewsletter_recipientInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutNewsletter_recipientInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutNewsletter_recipientInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutNewsletter_recipientInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
