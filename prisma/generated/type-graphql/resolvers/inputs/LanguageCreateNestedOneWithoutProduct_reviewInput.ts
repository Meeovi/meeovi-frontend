import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_reviewInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_reviewInput";
import { LanguageCreateWithoutProduct_reviewInput } from "../inputs/LanguageCreateWithoutProduct_reviewInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutProduct_reviewInput", {})
export class LanguageCreateNestedOneWithoutProduct_reviewInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_reviewInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_reviewInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
