import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateOrConnectWithoutUserInput } from "../inputs/LocaleCreateOrConnectWithoutUserInput";
import { LocaleCreateWithoutUserInput } from "../inputs/LocaleCreateWithoutUserInput";
import { LocaleWhereUniqueInput } from "../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.InputType("LocaleCreateNestedOneWithoutUserInput", {})
export class LocaleCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => LocaleCreateWithoutUserInput, {
    nullable: true
  })
  create?: LocaleCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => LocaleCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: LocaleCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: true
  })
  connect?: LocaleWhereUniqueInput | undefined;
}
