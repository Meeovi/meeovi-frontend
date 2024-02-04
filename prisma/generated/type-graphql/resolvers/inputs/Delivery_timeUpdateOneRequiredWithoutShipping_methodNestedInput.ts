import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeCreateOrConnectWithoutShipping_methodInput } from "../inputs/Delivery_timeCreateOrConnectWithoutShipping_methodInput";
import { Delivery_timeCreateWithoutShipping_methodInput } from "../inputs/Delivery_timeCreateWithoutShipping_methodInput";
import { Delivery_timeUpdateToOneWithWhereWithoutShipping_methodInput } from "../inputs/Delivery_timeUpdateToOneWithWhereWithoutShipping_methodInput";
import { Delivery_timeUpsertWithoutShipping_methodInput } from "../inputs/Delivery_timeUpsertWithoutShipping_methodInput";
import { Delivery_timeWhereUniqueInput } from "../inputs/Delivery_timeWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_timeUpdateOneRequiredWithoutShipping_methodNestedInput", {})
export class Delivery_timeUpdateOneRequiredWithoutShipping_methodNestedInput {
  @TypeGraphQL.Field(_type => Delivery_timeCreateWithoutShipping_methodInput, {
    nullable: true
  })
  create?: Delivery_timeCreateWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeCreateOrConnectWithoutShipping_methodInput, {
    nullable: true
  })
  connectOrCreate?: Delivery_timeCreateOrConnectWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeUpsertWithoutShipping_methodInput, {
    nullable: true
  })
  upsert?: Delivery_timeUpsertWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeWhereUniqueInput, {
    nullable: true
  })
  connect?: Delivery_timeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeUpdateToOneWithWhereWithoutShipping_methodInput, {
    nullable: true
  })
  update?: Delivery_timeUpdateToOneWithWhereWithoutShipping_methodInput | undefined;
}
