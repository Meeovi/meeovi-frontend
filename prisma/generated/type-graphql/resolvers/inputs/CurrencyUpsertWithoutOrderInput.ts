import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutOrderInput } from "../inputs/CurrencyCreateWithoutOrderInput";
import { CurrencyUpdateWithoutOrderInput } from "../inputs/CurrencyUpdateWithoutOrderInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpsertWithoutOrderInput", {})
export class CurrencyUpsertWithoutOrderInput {
  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutOrderInput, {
    nullable: false
  })
  update!: CurrencyUpdateWithoutOrderInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutOrderInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutOrderInput;

  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;
}
