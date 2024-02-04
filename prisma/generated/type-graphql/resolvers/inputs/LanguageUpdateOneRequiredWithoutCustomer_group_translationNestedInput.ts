import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCustomer_group_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCustomer_group_translationInput";
import { LanguageCreateWithoutCustomer_group_translationInput } from "../inputs/LanguageCreateWithoutCustomer_group_translationInput";
import { LanguageUpdateToOneWithWhereWithoutCustomer_group_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutCustomer_group_translationInput";
import { LanguageUpsertWithoutCustomer_group_translationInput } from "../inputs/LanguageUpsertWithoutCustomer_group_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutCustomer_group_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutCustomer_group_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCustomer_group_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCustomer_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCustomer_group_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCustomer_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutCustomer_group_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutCustomer_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutCustomer_group_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutCustomer_group_translationInput | undefined;
}
