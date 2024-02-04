import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleUpdateWithoutUserInput } from "../inputs/LocaleUpdateWithoutUserInput";
import { LocaleWhereInput } from "../inputs/LocaleWhereInput";

@TypeGraphQL.InputType("LocaleUpdateToOneWithWhereWithoutUserInput", {})
export class LocaleUpdateToOneWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  where?: LocaleWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpdateWithoutUserInput, {
    nullable: false
  })
  data!: LocaleUpdateWithoutUserInput;
}
