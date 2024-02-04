import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutSales_channelInput } from "../inputs/LanguageCreateWithoutSales_channelInput";
import { LanguageUpdateWithoutSales_channelInput } from "../inputs/LanguageUpdateWithoutSales_channelInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutSales_channelInput", {})
export class LanguageUpsertWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
