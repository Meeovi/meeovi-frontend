import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutOrderInput } from "../inputs/LanguageCreateOrConnectWithoutOrderInput";
import { LanguageCreateWithoutOrderInput } from "../inputs/LanguageCreateWithoutOrderInput";
import { LanguageUpdateToOneWithWhereWithoutOrderInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutOrderInput";
import { LanguageUpsertWithoutOrderInput } from "../inputs/LanguageUpsertWithoutOrderInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutOrderNestedInput", {})
export class LanguageUpdateOneRequiredWithoutOrderNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutOrderInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutOrderInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutOrderInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutOrderInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutOrderInput | undefined;
}
