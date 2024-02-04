import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput } from "../inputs/LanguageCreateOrConnectWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput";
import { LanguageCreateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput } from "../inputs/LanguageCreateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput";
import { LanguageUpdateToOneWithWhereWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput";
import { LanguageUpsertWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput } from "../inputs/LanguageUpsertWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageNestedInput", {})
export class LanguageUpdateOneRequiredWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput | undefined;
}
