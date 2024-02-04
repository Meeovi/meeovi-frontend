import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutOrderInput } from "../inputs/LanguageCreateOrConnectWithoutOrderInput";
import { LanguageCreateWithoutOrderInput } from "../inputs/LanguageCreateWithoutOrderInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutOrderInput", {})
export class LanguageCreateNestedOneWithoutOrderInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutOrderInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutOrderInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
