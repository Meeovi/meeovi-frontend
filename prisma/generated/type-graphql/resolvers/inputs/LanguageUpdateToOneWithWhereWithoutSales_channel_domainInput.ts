import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutSales_channel_domainInput } from "../inputs/LanguageUpdateWithoutSales_channel_domainInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutSales_channel_domainInput", {})
export class LanguageUpdateToOneWithWhereWithoutSales_channel_domainInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSales_channel_domainInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutSales_channel_domainInput;
}
