import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutDelivery_time_translationInput } from "../inputs/LanguageCreateOrConnectWithoutDelivery_time_translationInput";
import { LanguageCreateWithoutDelivery_time_translationInput } from "../inputs/LanguageCreateWithoutDelivery_time_translationInput";
import { LanguageUpdateToOneWithWhereWithoutDelivery_time_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutDelivery_time_translationInput";
import { LanguageUpsertWithoutDelivery_time_translationInput } from "../inputs/LanguageUpsertWithoutDelivery_time_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutDelivery_time_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutDelivery_time_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutDelivery_time_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutDelivery_time_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutDelivery_time_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutDelivery_time_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutDelivery_time_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutDelivery_time_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutDelivery_time_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutDelivery_time_translationInput | undefined;
}
