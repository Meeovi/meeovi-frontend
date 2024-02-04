import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_translationInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_translationInput";
import { LanguageCreateWithoutProduct_translationInput } from "../inputs/LanguageCreateWithoutProduct_translationInput";
import { LanguageUpdateToOneWithWhereWithoutProduct_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutProduct_translationInput";
import { LanguageUpsertWithoutProduct_translationInput } from "../inputs/LanguageUpsertWithoutProduct_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutProduct_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutProduct_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutProduct_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutProduct_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutProduct_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutProduct_translationInput | undefined;
}
