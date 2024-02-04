import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_manufacturer_translationInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_manufacturer_translationInput";
import { LanguageCreateWithoutProduct_manufacturer_translationInput } from "../inputs/LanguageCreateWithoutProduct_manufacturer_translationInput";
import { LanguageUpdateToOneWithWhereWithoutProduct_manufacturer_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutProduct_manufacturer_translationInput";
import { LanguageUpsertWithoutProduct_manufacturer_translationInput } from "../inputs/LanguageUpsertWithoutProduct_manufacturer_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutProduct_manufacturer_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutProduct_manufacturer_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_manufacturer_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_manufacturer_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_manufacturer_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_manufacturer_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutProduct_manufacturer_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutProduct_manufacturer_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutProduct_manufacturer_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutProduct_manufacturer_translationInput | undefined;
}
