import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutNumber_range_translationInput } from "../inputs/LanguageCreateOrConnectWithoutNumber_range_translationInput";
import { LanguageCreateWithoutNumber_range_translationInput } from "../inputs/LanguageCreateWithoutNumber_range_translationInput";
import { LanguageUpdateToOneWithWhereWithoutNumber_range_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutNumber_range_translationInput";
import { LanguageUpsertWithoutNumber_range_translationInput } from "../inputs/LanguageUpsertWithoutNumber_range_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutNumber_range_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutNumber_range_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutNumber_range_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutNumber_range_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutNumber_range_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutNumber_range_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutNumber_range_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutNumber_range_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutNumber_range_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutNumber_range_translationInput | undefined;
}
