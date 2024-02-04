import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutSales_channelInput } from "../inputs/LanguageUpdateWithoutSales_channelInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutSales_channelInput", {})
export class LanguageUpdateToOneWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutSales_channelInput;
}
