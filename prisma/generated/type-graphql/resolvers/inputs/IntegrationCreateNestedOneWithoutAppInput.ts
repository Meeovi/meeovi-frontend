import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateOrConnectWithoutAppInput } from "../inputs/IntegrationCreateOrConnectWithoutAppInput";
import { IntegrationCreateWithoutAppInput } from "../inputs/IntegrationCreateWithoutAppInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationCreateNestedOneWithoutAppInput", {})
export class IntegrationCreateNestedOneWithoutAppInput {
  @TypeGraphQL.Field(_type => IntegrationCreateWithoutAppInput, {
    nullable: true
  })
  create?: IntegrationCreateWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationCreateOrConnectWithoutAppInput, {
    nullable: true
  })
  connectOrCreate?: IntegrationCreateOrConnectWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: true
  })
  connect?: IntegrationWhereUniqueInput | undefined;
}
