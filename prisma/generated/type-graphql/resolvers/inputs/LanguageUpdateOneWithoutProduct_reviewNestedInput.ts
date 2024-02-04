import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_reviewInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_reviewInput";
import { LanguageCreateWithoutProduct_reviewInput } from "../inputs/LanguageCreateWithoutProduct_reviewInput";
import { LanguageUpdateToOneWithWhereWithoutProduct_reviewInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutProduct_reviewInput";
import { LanguageUpsertWithoutProduct_reviewInput } from "../inputs/LanguageUpsertWithoutProduct_reviewInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneWithoutProduct_reviewNestedInput", {})
export class LanguageUpdateOneWithoutProduct_reviewNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_reviewInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_reviewInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutProduct_reviewInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  disconnect?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  delete?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutProduct_reviewInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutProduct_reviewInput | undefined;
}
