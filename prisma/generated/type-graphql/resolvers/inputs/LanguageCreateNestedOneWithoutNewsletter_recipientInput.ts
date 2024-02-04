import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutNewsletter_recipientInput } from "../inputs/LanguageCreateOrConnectWithoutNewsletter_recipientInput";
import { LanguageCreateWithoutNewsletter_recipientInput } from "../inputs/LanguageCreateWithoutNewsletter_recipientInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutNewsletter_recipientInput", {})
export class LanguageCreateNestedOneWithoutNewsletter_recipientInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutNewsletter_recipientInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutNewsletter_recipientInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutNewsletter_recipientInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutNewsletter_recipientInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
