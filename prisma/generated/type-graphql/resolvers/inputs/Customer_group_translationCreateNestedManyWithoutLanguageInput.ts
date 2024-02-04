import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_translationCreateManyLanguageInputEnvelope } from "../inputs/Customer_group_translationCreateManyLanguageInputEnvelope";
import { Customer_group_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Customer_group_translationCreateOrConnectWithoutLanguageInput";
import { Customer_group_translationCreateWithoutLanguageInput } from "../inputs/Customer_group_translationCreateWithoutLanguageInput";
import { Customer_group_translationWhereUniqueInput } from "../inputs/Customer_group_translationWhereUniqueInput";

@TypeGraphQL.InputType("Customer_group_translationCreateNestedManyWithoutLanguageInput", {})
export class Customer_group_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Customer_group_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Customer_group_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Customer_group_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_group_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_group_translationWhereUniqueInput[] | undefined;
}
