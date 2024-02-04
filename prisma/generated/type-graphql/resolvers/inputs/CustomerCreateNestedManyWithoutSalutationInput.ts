import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManySalutationInputEnvelope } from "../inputs/CustomerCreateManySalutationInputEnvelope";
import { CustomerCreateOrConnectWithoutSalutationInput } from "../inputs/CustomerCreateOrConnectWithoutSalutationInput";
import { CustomerCreateWithoutSalutationInput } from "../inputs/CustomerCreateWithoutSalutationInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedManyWithoutSalutationInput", {})
export class CustomerCreateNestedManyWithoutSalutationInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutSalutationInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutSalutationInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManySalutationInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManySalutationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;
}
