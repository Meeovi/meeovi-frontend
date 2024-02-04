import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutSales_channel_domainInput } from "../inputs/LanguageCreateWithoutSales_channel_domainInput";
import { LanguageUpdateWithoutSales_channel_domainInput } from "../inputs/LanguageUpdateWithoutSales_channel_domainInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutSales_channel_domainInput", {})
export class LanguageUpsertWithoutSales_channel_domainInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSales_channel_domainInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutSales_channel_domainInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutSales_channel_domainInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutSales_channel_domainInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
