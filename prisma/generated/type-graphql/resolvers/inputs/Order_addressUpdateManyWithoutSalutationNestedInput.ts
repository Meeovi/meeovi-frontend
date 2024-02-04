import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateManySalutationInputEnvelope } from "../inputs/Order_addressCreateManySalutationInputEnvelope";
import { Order_addressCreateOrConnectWithoutSalutationInput } from "../inputs/Order_addressCreateOrConnectWithoutSalutationInput";
import { Order_addressCreateWithoutSalutationInput } from "../inputs/Order_addressCreateWithoutSalutationInput";
import { Order_addressScalarWhereInput } from "../inputs/Order_addressScalarWhereInput";
import { Order_addressUpdateManyWithWhereWithoutSalutationInput } from "../inputs/Order_addressUpdateManyWithWhereWithoutSalutationInput";
import { Order_addressUpdateWithWhereUniqueWithoutSalutationInput } from "../inputs/Order_addressUpdateWithWhereUniqueWithoutSalutationInput";
import { Order_addressUpsertWithWhereUniqueWithoutSalutationInput } from "../inputs/Order_addressUpsertWithWhereUniqueWithoutSalutationInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressUpdateManyWithoutSalutationNestedInput", {})
export class Order_addressUpdateManyWithoutSalutationNestedInput {
  @TypeGraphQL.Field(_type => [Order_addressCreateWithoutSalutationInput], {
    nullable: true
  })
  create?: Order_addressCreateWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressCreateOrConnectWithoutSalutationInput], {
    nullable: true
  })
  connectOrCreate?: Order_addressCreateOrConnectWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressUpsertWithWhereUniqueWithoutSalutationInput], {
    nullable: true
  })
  upsert?: Order_addressUpsertWithWhereUniqueWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_addressCreateManySalutationInputEnvelope, {
    nullable: true
  })
  createMany?: Order_addressCreateManySalutationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereUniqueInput], {
    nullable: true
  })
  set?: Order_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressUpdateWithWhereUniqueWithoutSalutationInput], {
    nullable: true
  })
  update?: Order_addressUpdateWithWhereUniqueWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressUpdateManyWithWhereWithoutSalutationInput], {
    nullable: true
  })
  updateMany?: Order_addressUpdateManyWithWhereWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_addressScalarWhereInput[] | undefined;
}
