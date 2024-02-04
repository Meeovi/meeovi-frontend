import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateOrConnectWithoutPromotion_discount_pricesInput } from "../inputs/CurrencyCreateOrConnectWithoutPromotion_discount_pricesInput";
import { CurrencyCreateWithoutPromotion_discount_pricesInput } from "../inputs/CurrencyCreateWithoutPromotion_discount_pricesInput";
import { CurrencyUpdateToOneWithWhereWithoutPromotion_discount_pricesInput } from "../inputs/CurrencyUpdateToOneWithWhereWithoutPromotion_discount_pricesInput";
import { CurrencyUpsertWithoutPromotion_discount_pricesInput } from "../inputs/CurrencyUpsertWithoutPromotion_discount_pricesInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyUpdateOneRequiredWithoutPromotion_discount_pricesNestedInput", {})
export class CurrencyUpdateOneRequiredWithoutPromotion_discount_pricesNestedInput {
  @TypeGraphQL.Field(_type => CurrencyCreateWithoutPromotion_discount_pricesInput, {
    nullable: true
  })
  create?: CurrencyCreateWithoutPromotion_discount_pricesInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutPromotion_discount_pricesInput, {
    nullable: true
  })
  connectOrCreate?: CurrencyCreateOrConnectWithoutPromotion_discount_pricesInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpsertWithoutPromotion_discount_pricesInput, {
    nullable: true
  })
  upsert?: CurrencyUpsertWithoutPromotion_discount_pricesInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  connect?: CurrencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateToOneWithWhereWithoutPromotion_discount_pricesInput, {
    nullable: true
  })
  update?: CurrencyUpdateToOneWithWhereWithoutPromotion_discount_pricesInput | undefined;
}
