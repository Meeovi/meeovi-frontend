import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateWithoutAppInput } from "../inputs/IntegrationCreateWithoutAppInput";
import { IntegrationUpdateWithoutAppInput } from "../inputs/IntegrationUpdateWithoutAppInput";
import { IntegrationWhereInput } from "../inputs/IntegrationWhereInput";

@TypeGraphQL.InputType("IntegrationUpsertWithoutAppInput", {})
export class IntegrationUpsertWithoutAppInput {
  @TypeGraphQL.Field(_type => IntegrationUpdateWithoutAppInput, {
    nullable: false
  })
  update!: IntegrationUpdateWithoutAppInput;

  @TypeGraphQL.Field(_type => IntegrationCreateWithoutAppInput, {
    nullable: false
  })
  create!: IntegrationCreateWithoutAppInput;

  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;
}
