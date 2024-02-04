import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateWithoutAppInput } from "../inputs/IntegrationCreateWithoutAppInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationCreateOrConnectWithoutAppInput", {})
export class IntegrationCreateOrConnectWithoutAppInput {
  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationCreateWithoutAppInput, {
    nullable: false
  })
  create!: IntegrationCreateWithoutAppInput;
}
