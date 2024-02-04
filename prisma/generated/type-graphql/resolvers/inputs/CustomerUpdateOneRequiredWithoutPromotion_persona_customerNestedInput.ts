import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutPromotion_persona_customerInput } from "../inputs/CustomerCreateOrConnectWithoutPromotion_persona_customerInput";
import { CustomerCreateWithoutPromotion_persona_customerInput } from "../inputs/CustomerCreateWithoutPromotion_persona_customerInput";
import { CustomerUpdateToOneWithWhereWithoutPromotion_persona_customerInput } from "../inputs/CustomerUpdateToOneWithWhereWithoutPromotion_persona_customerInput";
import { CustomerUpsertWithoutPromotion_persona_customerInput } from "../inputs/CustomerUpsertWithoutPromotion_persona_customerInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneRequiredWithoutPromotion_persona_customerNestedInput", {})
export class CustomerUpdateOneRequiredWithoutPromotion_persona_customerNestedInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutPromotion_persona_customerInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutPromotion_persona_customerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutPromotion_persona_customerInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutPromotion_persona_customerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutPromotion_persona_customerInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutPromotion_persona_customerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateToOneWithWhereWithoutPromotion_persona_customerInput, {
    nullable: true
  })
  update?: CustomerUpdateToOneWithWhereWithoutPromotion_persona_customerInput | undefined;
}
