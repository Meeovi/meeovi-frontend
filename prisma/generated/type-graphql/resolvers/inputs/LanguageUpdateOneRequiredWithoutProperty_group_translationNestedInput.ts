import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProperty_group_translationInput } from "../inputs/LanguageCreateOrConnectWithoutProperty_group_translationInput";
import { LanguageCreateWithoutProperty_group_translationInput } from "../inputs/LanguageCreateWithoutProperty_group_translationInput";
import { LanguageUpdateToOneWithWhereWithoutProperty_group_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutProperty_group_translationInput";
import { LanguageUpsertWithoutProperty_group_translationInput } from "../inputs/LanguageUpsertWithoutProperty_group_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutProperty_group_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutProperty_group_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProperty_group_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProperty_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProperty_group_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProperty_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutProperty_group_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutProperty_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutProperty_group_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutProperty_group_translationInput | undefined;
}
