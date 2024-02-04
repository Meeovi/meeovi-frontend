import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateManySalutationInputEnvelope } from "../inputs/Customer_addressCreateManySalutationInputEnvelope";
import { Customer_addressCreateOrConnectWithoutSalutationInput } from "../inputs/Customer_addressCreateOrConnectWithoutSalutationInput";
import { Customer_addressCreateWithoutSalutationInput } from "../inputs/Customer_addressCreateWithoutSalutationInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressCreateNestedManyWithoutSalutationInput", {})
export class Customer_addressCreateNestedManyWithoutSalutationInput {
  @TypeGraphQL.Field(_type => [Customer_addressCreateWithoutSalutationInput], {
    nullable: true
  })
  create?: Customer_addressCreateWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressCreateOrConnectWithoutSalutationInput], {
    nullable: true
  })
  connectOrCreate?: Customer_addressCreateOrConnectWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_addressCreateManySalutationInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_addressCreateManySalutationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_addressWhereUniqueInput[] | undefined;
}
