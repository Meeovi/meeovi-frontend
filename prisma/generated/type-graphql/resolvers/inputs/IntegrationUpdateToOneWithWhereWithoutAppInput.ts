import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationUpdateWithoutAppInput } from "../inputs/IntegrationUpdateWithoutAppInput";
import { IntegrationWhereInput } from "../inputs/IntegrationWhereInput";

@TypeGraphQL.InputType("IntegrationUpdateToOneWithWhereWithoutAppInput", {})
export class IntegrationUpdateToOneWithWhereWithoutAppInput {
  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationUpdateWithoutAppInput, {
    nullable: false
  })
  data!: IntegrationUpdateWithoutAppInput;
}
