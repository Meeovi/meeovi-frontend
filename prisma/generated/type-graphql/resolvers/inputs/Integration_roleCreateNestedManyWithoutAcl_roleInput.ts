import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleCreateManyAcl_roleInputEnvelope } from "../inputs/Integration_roleCreateManyAcl_roleInputEnvelope";
import { Integration_roleCreateOrConnectWithoutAcl_roleInput } from "../inputs/Integration_roleCreateOrConnectWithoutAcl_roleInput";
import { Integration_roleCreateWithoutAcl_roleInput } from "../inputs/Integration_roleCreateWithoutAcl_roleInput";
import { Integration_roleWhereUniqueInput } from "../inputs/Integration_roleWhereUniqueInput";

@TypeGraphQL.InputType("Integration_roleCreateNestedManyWithoutAcl_roleInput", {})
export class Integration_roleCreateNestedManyWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => [Integration_roleCreateWithoutAcl_roleInput], {
    nullable: true
  })
  create?: Integration_roleCreateWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleCreateOrConnectWithoutAcl_roleInput], {
    nullable: true
  })
  connectOrCreate?: Integration_roleCreateOrConnectWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => Integration_roleCreateManyAcl_roleInputEnvelope, {
    nullable: true
  })
  createMany?: Integration_roleCreateManyAcl_roleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereUniqueInput], {
    nullable: true
  })
  connect?: Integration_roleWhereUniqueInput[] | undefined;
}
