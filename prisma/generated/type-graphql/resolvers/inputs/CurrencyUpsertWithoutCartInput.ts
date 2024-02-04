import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutCartInput } from "../inputs/CurrencyCreateWithoutCartInput";
import { CurrencyUpdateWithoutCartInput } from "../inputs/CurrencyUpdateWithoutCartInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpsertWithoutCartInput", {})
export class CurrencyUpsertWithoutCartInput {
  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutCartInput, {
    nullable: false
  })
  update!: CurrencyUpdateWithoutCartInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutCartInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutCartInput;

  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;
}
